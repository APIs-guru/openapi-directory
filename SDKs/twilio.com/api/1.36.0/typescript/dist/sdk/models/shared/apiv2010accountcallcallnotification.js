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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ApiV2010AccountCallCallNotificationRequestMethodEnum;
(function (ApiV2010AccountCallCallNotificationRequestMethodEnum) {
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Head"] = "HEAD";
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Get"] = "GET";
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Post"] = "POST";
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Put"] = "PUT";
    ApiV2010AccountCallCallNotificationRequestMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountCallCallNotificationRequestMethodEnum || (ApiV2010AccountCallCallNotificationRequestMethodEnum = {}));
var ApiV2010AccountCallCallNotification = /** @class */ (function (_super) {
    __extends(ApiV2010AccountCallCallNotification, _super);
    function ApiV2010AccountCallCallNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "errorCode", void 0);
    __decorate([
        Metadata({ data: "json, name=log" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "log", void 0);
    __decorate([
        Metadata({ data: "json, name=message_date" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "messageDate", void 0);
    __decorate([
        Metadata({ data: "json, name=message_text" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "messageText", void 0);
    __decorate([
        Metadata({ data: "json, name=more_info" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "moreInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "requestMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "requestUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotification.prototype, "uri", void 0);
    return ApiV2010AccountCallCallNotification;
}(SpeakeasyBase));
export { ApiV2010AccountCallCallNotification };
