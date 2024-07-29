$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//字級大小
	$(".js-top-function button").click(function () {
		if ($(this).hasClass("js-font-sm")) {
			$("html").addClass("sm");
		} else if ($(this).hasClass("js-font-md")) {
			$("html").removeClass("sm").removeClass("lg");
		} else if ($(this).hasClass("js-font-lg")) {
			$("html").addClass("lg");
		}
		$(this).addClass("active");
		return false;
	})

	//點擊切換active樣式
	$(".js-toggle-btn").click(function (){
		$(this).toggleClass("active");
	})
	//驗證碼切換
	$(".js-otp").click(function () {
		$(this).addClass("d-none");
		$(".js-verify").removeClass("d-none");
		$(".js-verify-con").addClass("d-none");
		$(".js-otp-con").removeClass("d-none");
		return false;
	})
	$(".js-verify").click(function () {
		$(this).addClass("d-none");
		$(".js-otp").removeClass("d-none");
		$(".js-otp-con").addClass("d-none");
		$(".js-verify-con").removeClass("d-none");
		return false;
	})
	//banner滑鼠滑動
	$('.carousel-inner').on('mousedown', function (e) {
		var startX = e.pageX || e.touches[0].pageX;
		$(this).on('mousemove touchmove', function (e) {
			var endX = e.pageX || e.touches[0].pageX;
			if (startX - endX > 50) {
				$('.carousel').carousel('next');
				$(this).off('mousemove touchmove');
			} else if (endX - startX > 50) {
				$('.carousel').carousel('prev');
				$(this).off('mousemove touchmove');
			}
		});
	}).on('mouseup touchend', function () {
		$(this).off('mousemove touchmove');
	});

	
	$(".js-dropdown-menu").find("a").click(function () {
		$(this).toggleClass("active");
		$(".js-dropdown-menu").find("a").not(this).removeClass("active");
	})
	//table編輯
	$(".js-table-edit-ok").hide();
	$(".js-table-edit").click(function () {
		var $tr = $(this).parent(".js-table-function").parent("td").parent("tr");
		var $readonlyElements = $tr.find("[readonly]");
		$readonlyElements.removeAttr("readonly");
		$(".js-table-function").hide();
		$tr.find(".js-table-edit-ok").show();
		$tr.addClass("editing");
	});
	$(".js-table-edit-ok").click(function () {
		var $tr = $(this).parent("td").parent("tr");
		var $readonlyElements = $tr.find(".form-control");
		$readonlyElements.attr("readonly", true);
		$(".js-table-function").show();
		$(this).hide();
		$tr.removeClass("editing");
	});
	//table排序
	$(".js-table-order").click(function () {
		var $table = $(this).parents("td");
		$(this).toggleClass("active");
		$table.find(".table-order-btn").toggleClass("d-flex");
		$table.find(".js-table-order-num").toggleClass("d-none");
		$table.find(".js-table-function").toggleClass("d-none");
	})
	// 檢查視窗寬度
	function checkWindowSize() {
		if ($(window).width() > 1200) {
			// 如果寬度大於 1200px，默認展開所有行
			$(".table-toggle").each(function () {
				let row = $(this).closest("tr");
				let contentCell = row.find(".table-content");

				// 展開該行
				row.removeClass("hide");
				contentCell.show();
			});
		}
	}

	// 初始化時檢查視窗大小
	checkWindowSize();

	// 在視窗大小改變時執行檢查
	$(window).resize(function () {
		checkWindowSize();
	});

	// 添加點擊事件處理程序
	$(".table-toggle").on("click", function () {
		let row = $(this).closest("tr");
		let contentCell = row.find(".table-content");

		// 判斷是否是小於或等於 1200px 的視窗
		if ($(window).width() <= 1200) {
			// 在小於或等於 1200px 時，動態切換該行的展開和收起狀態，使用 slideToggle 實現平滑效果
			row.toggleClass("hide");
			contentCell.slideToggle();
		} else {
			// 在大於 1200px 時，只切換該行的展開和收起狀態
			row.toggleClass("hide");

			// 根據行的狀態顯示或隱藏內容單元格
			contentCell.toggle(!row.hasClass("hide"));
		}
	});

	//---------------------側邊選單設定------------------------
	$(".js-side-menu-toggler").click(function () {//側邊選單收合
		$(".js-side-menu").toggleClass("close");
	});
	RESIZE();

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();
		if (WINDOW < 992) {
			$('.js-side-menu').addClass("close");
			$(".js-side-content").addClass("close");
		}
	}
	$(window).resize(function () {
		RESIZE();
	})
})//JS尾端	
