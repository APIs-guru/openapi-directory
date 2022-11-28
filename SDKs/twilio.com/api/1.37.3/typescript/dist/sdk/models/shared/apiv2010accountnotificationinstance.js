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
export var ApiV2010AccountNotificationInstanceRequestMethodEnum;
(function (ApiV2010AccountNotificationInstanceRequestMethodEnum) {
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Head"] = "HEAD";
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Get"] = "GET";
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Post"] = "POST";
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Put"] = "PUT";
    ApiV2010AccountNotificationInstanceRequestMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountNotificationInstanceRequestMethodEnum || (ApiV2010AccountNotificationInstanceRequestMethodEnum = {}));
var ApiV2010AccountNotificationInstance = /** @class */ (function (_super) {
    __extends(ApiV2010AccountNotificationInstance, _super);
    function ApiV2010AccountNotificationInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "log", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_date" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "messageDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message_text" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "messageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=more_info" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "moreInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "requestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_variables" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "requestVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response_body" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "responseBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response_headers" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "responseHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountNotificationInstance.prototype, "uri", void 0);
    return ApiV2010AccountNotificationInstance;
}(SpeakeasyBase));
export { ApiV2010AccountNotificationInstance };
