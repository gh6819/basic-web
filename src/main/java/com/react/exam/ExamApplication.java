package com.react.exam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@SpringBootApplication
public class ExamApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamApplication.class, args);
	}

	@RequestMapping("/user/main.do")
	public String mainpage(HttpServletRequest request, HttpServletResponse response, Map<String, Object> paramMap) {
		System.out.println("모레가 다 떨어지고 시계가 멈춰버려도 쌓여간 시간만은 네곁에 네곁에");
		return "test";
	}
}
