var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var SmsQueryParams = /** @class */ (function (_super) {
    __extends(SmsQueryParams, _super);
    function SmsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delay" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "delay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=details" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flash" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "flash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foreign_id" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "foreignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "json", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=no_reload" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "noReload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=performance_tracking" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "performanceTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return_msg_id" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "returnMsgId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=udh" }),
        __metadata("design:type", String)
    ], SmsQueryParams.prototype, "udh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unicode" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "unicode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utf8" }),
        __metadata("design:type", Number)
    ], SmsQueryParams.prototype, "utf8", void 0);
    return SmsQueryParams;
}(SpeakeasyBase));
export { SmsQueryParams };
var Sms200ApplicationJsonMessages = /** @class */ (function (_super) {
    __extends(Sms200ApplicationJsonMessages, _super);
    function Sms200ApplicationJsonMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_text" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "errorText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages" }),
        __metadata("design:type", Array)
    ], Sms200ApplicationJsonMessages.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parts" }),
        __metadata("design:type", Number)
    ], Sms200ApplicationJsonMessages.prototype, "parts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], Sms200ApplicationJsonMessages.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "recipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sender" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], Sms200ApplicationJsonMessages.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJsonMessages.prototype, "text", void 0);
    return Sms200ApplicationJsonMessages;
}(SpeakeasyBase));
export { Sms200ApplicationJsonMessages };
export var Sms200ApplicationJsonSmsTypeEnum;
(function (Sms200ApplicationJsonSmsTypeEnum) {
    Sms200ApplicationJsonSmsTypeEnum["Economy"] = "economy";
    Sms200ApplicationJsonSmsTypeEnum["Direct"] = "direct";
})(Sms200ApplicationJsonSmsTypeEnum || (Sms200ApplicationJsonSmsTypeEnum = {}));
var Sms200ApplicationJson = /** @class */ (function (_super) {
    __extends(Sms200ApplicationJson, _super);
    function Sms200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Sms200ApplicationJson.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: Sms200ApplicationJsonMessages }),
        __metadata("design:type", Array)
    ], Sms200ApplicationJson.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_type" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJson.prototype, "smsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], Sms200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_price" }),
        __metadata("design:type", Number)
    ], Sms200ApplicationJson.prototype, "totalPrice", void 0);
    return Sms200ApplicationJson;
}(SpeakeasyBase));
export { Sms200ApplicationJson };
var SmsRequest = /** @class */ (function (_super) {
    __extends(SmsRequest, _super);
    function SmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmsQueryParams)
    ], SmsRequest.prototype, "queryParams", void 0);
    return SmsRequest;
}(SpeakeasyBase));
export { SmsRequest };
var SmsResponse = /** @class */ (function (_super) {
    __extends(SmsResponse, _super);
    function SmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SmsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SmsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Sms200ApplicationJson)
    ], SmsResponse.prototype, "sms200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SmsResponse.prototype, "statusCode", void 0);
    return SmsResponse;
}(SpeakeasyBase));
export { SmsResponse };
