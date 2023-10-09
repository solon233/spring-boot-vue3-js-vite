package com.example.demo.object.bean;

import java.util.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IndexServiceOutput {
	// テーブルカラム
	private String pref;
	private Date updateTime;
}
