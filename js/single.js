var single_function={
	init: function() {
		single_function.mega_menu_change();
	},
	mega_menu_change: function() {
		var item=jQuery('.list-menu-mega .dropdown-item');
		if(item.length>0) {
			item.each(function(idx) {
				jQuery(this).on('mouseenter',function() {
					if(!jQuery(this).hasClass('link-more')){
						item.removeClass('active');
						jQuery(this).addClass('active');
						var item_content=jQuery('.list-content-mega .list-content-item');
						item_content.each(function(indx) {
							jQuery(this).removeClass('active');
							if(idx===indx) {
								jQuery(this).addClass('active');
							}
						})
					}
				});
			});
		}
	}
}
jQuery(document).ready(function() {
	single_function.init();
});