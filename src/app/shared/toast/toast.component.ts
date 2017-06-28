import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastConfig,ToastType} from './toast-model';

/**
 * toast组件
 */
@Component({
  selector: 'c-toast',
  templateUrl : './toast.component.html',
 })
export class ToastComponent implements OnInit {

  @Input() config = new ToastConfig(ToastType.INFO, '', '');

  @Output() dismissed = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    //自动关闭
    if (this.config.isAutoDismissing()) {
      setTimeout(() => this.dismiss(), this.config.getAutoDismissTime());
    }
  }

  /**
   * 判断是成功
   */
  private isSuccess() {
    return this.config.getToastType() === ToastType.SUCCESS;
  }

  /**
   * 判断是信息
   */
  private isInfo() {
    return this.config.getToastType() === ToastType.INFO;
  }

  /**
   * 判断是警告
   */
  private isWarning() {
    return this.config.getToastType() === ToastType.WARNING;
  }

  /**
   * 判断是错误
   */
  private isError() {
    return this.config.getToastType() === ToastType.ERROR;
  }

  /**
   * 解除
   */
  private dismiss() {
    this.dismissed.emit();
  }

  /**
   * 是否启用
   */
  private  isDismissEnabled() {
    return this.config.isDismissable();
  }


}