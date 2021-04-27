package com.lpg.api;

import org.testng.annotations.BeforeTest;

import io.restassured.RestAssured;

public class baseTest {
	
	static String allCities = "/citys";
	static String sortByCityId = "/attractions?cityID=1"; 
	static String attractionsSortByOrder = "/attractions?cityID=1&type=MUSEUM&_sort=rating&_order=desc";
	
	@BeforeTest
	public void env() {
		
		RestAssured.baseURI = "https://my-json-server.typicode.com";
		 RestAssured.basePath = "/leisurepassgroup/SDET-interview";
	}
	 	

}
