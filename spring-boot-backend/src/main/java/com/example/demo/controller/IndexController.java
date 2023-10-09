package com.example.demo.controller;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.object.bean.IndexServiceOutput;
import com.example.demo.service.IndexService;

@Controller
@RequestMapping("")
public class IndexController {

	private final IndexService indexService;

	@Autowired
	public IndexController(IndexService indexService) {
		this.indexService = indexService;
	}

	@GetMapping({ "", "/" })
	public String getBlank() {
		return "redirect:home";
	}

	@GetMapping({ "/home" })
	public ModelAndView index() {
		// 入力情報
		String code = "1001";

		// サービスよりデータ取得
		IndexServiceOutput output = this.indexService.execute(code);

		// 出力情報設定
		ModelAndView mav = new ModelAndView();
		// ページ名
		mav.setViewName("index");
		// 属性情報
		mav.addObject("code", code);
		mav.addObject("name", output.getPref());
		mav.addObject("time", new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(output.getUpdateTime()));
		return mav;

	}

}
