package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.example.demo.object.entity.MPrefEntity;

/**
 * SQLはsrc/main/resourcesにXMLで格納する方法もあるが
 * 複雑なSQLを使用でないのでアノテーションでメソッドに添付する
 */
@Mapper
public interface MPrefDao {

	@Select("SELECT * FROM m_pref")
	List<MPrefEntity> selectAll();

	@Select("SELECT * FROM m_pref WHERE code = #{code}")
	MPrefEntity selectPk(@Param("code") String code);
}
