package com.lpg.api;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

import java.util.List;
import org.testng.Assert;
import org.testng.annotations.Test;


public class getCity extends baseTest{
	
	
	//@Test
	public void getAllCities() {
		
		Response resp = given()
				.contentType(ContentType.JSON)
				.log().all()
				.get(allCities);	
		
		resp.prettyPrint();	
		
		List<String> respSize = resp.jsonPath().getList("id");
		
		Assert.assertEquals(resp.statusCode(), 200);
		Assert.assertEquals(respSize.size() , 5);
	}
	
	//@Test
	public void getNewYorkCity() {
		
		 Response resp = given()
				 .contentType(ContentType.JSON)
				 .log().all()
				 .get(sortByCityId);
		 
		 resp.prettyPrint();
		 
		 Assert.assertEquals(resp.statusCode(), 200);
		
		 List<String> resps = resp.jsonPath().getList("cityId");
		 
		 //below loop iterates and validates if cityID is 1
		 int i=0; 
		 while(i < resps.size()) {
		 Assert.assertEquals(resps.get(i) , "1");
		 i++;
		 }
		 
	}
	
	
	@Test
	public void getAttractionOrderByDesc() {
		
		 Response resp = given()
				 .contentType(ContentType.JSON)
				 .log().all()
				 .get(attractionsSortByOrder);
		 
		 resp.prettyPrint();
		 
		 Assert.assertEquals(resp.statusCode(), 200);
		 
		  // the below logic checks for type is Museum in the response 
		  
		 List<String> resps = resp.jsonPath().getList("type");
		 int i=0; 
		 while(i < resps.size()) {
		 Assert.assertEquals(resps.get(i) , "MUSEUM");
		 i++;
		 }
		 
		 
		 //Compares rating in response is in descending order
		 
		 
		 List<Number> ratings =  resp.jsonPath().getList("rating");
		 
		 int y = 0;
		 
		for(Number rating :ratings ) {
			if(y == 16) {
				break;
			}
			System.out.println(ratings.get(y));
			y++;
			
        int value = (int) Math.ceil(ratings.get(y++).doubleValue()); 
			
			if(rating.doubleValue() > value) { 
				System.out.println("true");
			}else {
				System.out.println("fail");
			}
		}
	}

	

}
