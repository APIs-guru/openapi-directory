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
export var MonitorV1AlertRequestMethodEnum;
(function (MonitorV1AlertRequestMethodEnum) {
    MonitorV1AlertRequestMethodEnum["Head"] = "HEAD";
    MonitorV1AlertRequestMethodEnum["Get"] = "GET";
    MonitorV1AlertRequestMethodEnum["Post"] = "POST";
    MonitorV1AlertRequestMethodEnum["Patch"] = "PATCH";
    MonitorV1AlertRequestMethodEnum["Put"] = "PUT";
    MonitorV1AlertRequestMethodEnum["Delete"] = "DELETE";
})(MonitorV1AlertRequestMethodEnum || (MonitorV1AlertRequestMethodEnum = {}));
var MonitorV1Alert = /** @class */ (function (_super) {
    __extends(MonitorV1Alert, _super);
    function MonitorV1Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alert_text" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "alertText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MonitorV1Alert.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_generated" }),
        __metadata("design:type", Date)
    ], MonitorV1Alert.prototype, "dateGenerated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MonitorV1Alert.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log_level" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=more_info" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "moreInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "requestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "resourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MonitorV1Alert.prototype, "url", void 0);
    return MonitorV1Alert;
}(SpeakeasyBase));
export { MonitorV1Alert };
