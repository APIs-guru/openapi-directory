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
export var ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum;
(function (ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum) {
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Head"] = "HEAD";
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Get"] = "GET";
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Post"] = "POST";
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Put"] = "PUT";
    ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum || (ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum = {}));
var ApiV2010AccountCallCallNotificationInstance = /** @class */ (function (_super) {
    __extends(ApiV2010AccountCallCallNotificationInstance, _super);
    function ApiV2010AccountCallCallNotificationInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "errorCode", void 0);
    __decorate([
        Metadata({ data: "json, name=log" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "log", void 0);
    __decorate([
        Metadata({ data: "json, name=message_date" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "messageDate", void 0);
    __decorate([
        Metadata({ data: "json, name=message_text" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "messageText", void 0);
    __decorate([
        Metadata({ data: "json, name=more_info" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "moreInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "requestMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "requestUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=request_variables" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "requestVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=response_body" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "responseBody", void 0);
    __decorate([
        Metadata({ data: "json, name=response_headers" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "responseHeaders", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCallCallNotificationInstance.prototype, "uri", void 0);
    return ApiV2010AccountCallCallNotificationInstance;
}(SpeakeasyBase));
export { ApiV2010AccountCallCallNotificationInstance };
