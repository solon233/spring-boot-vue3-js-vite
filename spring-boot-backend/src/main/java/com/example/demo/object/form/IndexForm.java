package com.example.demo.object.form;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class IndexForm {
	private String code;
	private String name;
	private String time;
}
