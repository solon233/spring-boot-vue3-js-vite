package com.example.demo.controller;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.constants.enums.EnumsServerMode;
import com.example.demo.object.bean.IndexServiceOutput;
import com.example.demo.object.form.IndexForm;
import com.example.demo.service.IndexService;

@Controller
@RequestMapping("")
public class IndexController {

	private final IndexService indexService;

	@Value("${server.mode.development:true}")
	private boolean isDevelopment;

	
	public IndexController(@Autowired IndexService indexService) {
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
		mav.addObject("mode",
				isDevelopment ? EnumsServerMode.DEVELOPMENT.getMode() : EnumsServerMode.PRODUCTION.getMode());
		mav.addObject("form", IndexForm.builder()
				.code(code)
				.name(output.getPref())
				.time(new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(output.getUpdateTime()))
				.build());

		return mav;

	}

}
