import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-account-corrent',
  templateUrl: './account-corrent.component.html',
  styleUrls: ['./account-corrent.component.scss']
})
export class AccountCorrentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
$(document).ready(function(){
	$('.table_teclado tr td').click(function(){
		const number = $(this).text();

		if (number == '') {
			$('#campo').val($('#campo').val().substr(0, $('#campo').val().length - 1)).focus();
		} else {
			$('#campo').val($('#campo').val() + number).focus();
		}
	});
});