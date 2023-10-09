package com.example.demo.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.MPrefDao;
import com.example.demo.object.bean.IndexServiceOutput;
import com.example.demo.object.entity.MPrefEntity;

@Service
public class IndexService {

	private final MPrefDao mPrefDao;

	/**
	 * コンストラクタ
	 * @param mPrefDao
	 */
	@Autowired
	public IndexService(MPrefDao mPrefDao) {
		this.mPrefDao = mPrefDao;
	}

	/**
	 * データ取得
	 * @param code
	 * @return
	 */
	public IndexServiceOutput execute(String code) {
		// データ取得
		MPrefEntity entity = this.mPrefDao.selectPk(code);

		// timestamp型をDate型に変換
		Date updateDate = new Date(entity.getUpdateTime().getTime());

		// 出力情報編集
		return IndexServiceOutput.builder()
				.pref(entity.getPref())
				.updateTime(updateDate).build();
	}
}
