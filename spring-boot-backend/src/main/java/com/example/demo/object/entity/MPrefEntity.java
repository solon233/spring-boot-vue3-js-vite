package com.example.demo.object.entity;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class MPrefEntity {
	// テーブルカラム
	private String code;
	private String region;
	private String pref;
	private Timestamp updateTime;
}
