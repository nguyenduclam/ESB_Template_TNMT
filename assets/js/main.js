/*---- Animation Slider Tabs ----*/
$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    var $old_tab = $($(e.target).attr("href"));
    var $new_tab = $($(e.relatedTarget).attr("href"));

    if ($new_tab.index() < $old_tab.index()) {
        $old_tab.css('position', 'relative').css("right", "0").show();
        $old_tab.animate({"right": "-100%"}, 500, function () {
            $old_tab.css("right", 0).removeAttr("style");
        });
    } else {
        $old_tab.css('position', 'relative').css("left", "0").show();
        $old_tab.animate({"left": "-100%"}, 500, function () {
            $old_tab.css("left", 0).removeAttr("style");
        });
    }
});

$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var $new_tab = $($(e.target).attr("href"));
    var $old_tab = $($(e.relatedTarget).attr("href"));

    if ($new_tab.index() > $old_tab.index()) {
        $new_tab.css('position', 'relative').css("right", "-2500px");
        $new_tab.animate({"right": "0"}, 500);
    } else {
        $new_tab.css('position', 'relative').css("left", "-2500px");
        $new_tab.animate({"left": "0"}, 500);
    }
});

/*---- Code để DOM một Object nào đó đem vào đây ----*/
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
});

/*---- Modal Examples ----*/
$(".exp_1").click(function () {
    $("#exp_1").modal("show");
    return false;
});
$(".exp_2").click(function () {
    $("#exp_2").modal("show");
    return false;
});
$(".exp_3").click(function () {
    $("#exp_3").modal("show");
    return false;
});
$(".exp_4").click(function () {
    $("#exp_4").modal("show");
    return false;
});
$(".exp_5").click(function () {
    $("#exp_5").modal("show");
    return false;
});

/*---- Modal Login ----*/
$("#login-btn").click(function () {
    $("#loginModal").modal("show");
    return false;
});

/*---- Register Login ----*/
$("#register-btn").click(function () {
    $("#registerModal").modal("show");
    return false;
});

/*---- Input Files Customs ----*/
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("Chọn file...");
    } else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});

/*---- Register Form ----*/
$("#organ_pers").change(function () {
    $("#organ_pers option:selected").each(function () {
        if ($("#organ_pers option:selected").text() == "Cá nhân") {
            $("#personal").show(250);
            $("#organization_type").hide(250);
        } else {
            $("#organization_type").show(250);
            $("#personal").hide(250);
        }
    });
}).trigger("change");

/*---- Draggable Modal ----*/
$(".modal-header").on("mousedown", function (mousedownEvt) {
    var $draggable = $(this);
    var x = mousedownEvt.pageX - $draggable.offset().left,
        y = mousedownEvt.pageY - $draggable.offset().top;
    $("body").on("mousemove.draggable", function (mousemoveEvt) {
        $draggable.closest(".modal-dialog").offset({
            "left": mousemoveEvt.pageX - x,
            "top": mousemoveEvt.pageY - y
        });
    });
    $("body").one("mouseup", function () {
        $("body").off("mousemove.draggable");
    });
    $draggable.closest(".modal").one("bs.modal.hide", function () {
        $("body").off("mousemove.draggable");
    });
});

/*---- Datables ----*/
$(document).ready(function () {
    $('#table_history').dataTable({
        paging: true,
        autoWidth: false,
        "language": {
            pagingType: "full_numbers",
            search: '<span>Tìm kiếm:</span> _INPUT_',
            searchPlaceholder: 'Gõ để tìm...',
            paginate: {
                'first': 'First',
                'last': 'Last',
                'next': $('html').attr('dir') == 'rtl' ? '<span style="font-size:20px;">Trước</span>' :
                    '<span style="font-size:20px;">Sau</span>',
                'previous': $('html').attr('dir') == 'rtl' ? '<span style="font-size:20px;">Sau</span>' :
                    '<span style="font-size:20px;">Trước</span>'
            },
            sLengthMenu: "<span>Hiển thị</span> _MENU_ <span>dòng trên 1 bảng</span>",
            sZeroRecords: "Không tìm thấy kết quả",
            sInfo: "Hiển thị _START_ đến _END_ trên _TOTAL_ dòng",
            sInfoFiltered: "(tất cả _MAX_ dòng)",
            sInfoEmpty: "Hiển thị 0 đến _END_ trên _TOTAL_ dòng"
        }
    });
});
