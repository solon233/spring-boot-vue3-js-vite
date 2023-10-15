package com.example.demo.constants.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum EnumsServerMode {
	/** 開発モード */
	DEVELOPMENT("development"),
	/** 製品モード */
	PRODUCTION("production");

	/**
	 * 動作モード
	 */
	private String mode;
}
