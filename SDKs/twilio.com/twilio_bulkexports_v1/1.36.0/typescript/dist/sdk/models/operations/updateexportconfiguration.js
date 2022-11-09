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
import * as shared from "../shared";
export var UPDATEEXPORTCONFIGURATION_SERVERS = [
    "https://bulkexports.twilio.com",
];
var UpdateExportConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateExportConfigurationPathParams, _super);
    function UpdateExportConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" }),
        __metadata("design:type", String)
    ], UpdateExportConfigurationPathParams.prototype, "resourceType", void 0);
    return UpdateExportConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateExportConfigurationPathParams };
var UpdateExportConfigurationUpdateExportConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateExportConfigurationUpdateExportConfigurationRequest, _super);
    function UpdateExportConfigurationUpdateExportConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateExportConfigurationUpdateExportConfigurationRequest.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "form, name=WebhookMethod;" }),
        __metadata("design:type", String)
    ], UpdateExportConfigurationUpdateExportConfigurationRequest.prototype, "webhookMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=WebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateExportConfigurationUpdateExportConfigurationRequest.prototype, "webhookUrl", void 0);
    return UpdateExportConfigurationUpdateExportConfigurationRequest;
}(SpeakeasyBase));
export { UpdateExportConfigurationUpdateExportConfigurationRequest };
var UpdateExportConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateExportConfigurationSecurity, _super);
    function UpdateExportConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateExportConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateExportConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateExportConfigurationSecurity };
var UpdateExportConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateExportConfigurationRequest, _super);
    function UpdateExportConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateExportConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateExportConfigurationPathParams)
    ], UpdateExportConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateExportConfigurationUpdateExportConfigurationRequest)
    ], UpdateExportConfigurationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateExportConfigurationSecurity)
    ], UpdateExportConfigurationRequest.prototype, "security", void 0);
    return UpdateExportConfigurationRequest;
}(SpeakeasyBase));
export { UpdateExportConfigurationRequest };
var UpdateExportConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateExportConfigurationResponse, _super);
    function UpdateExportConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateExportConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateExportConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BulkexportsV1ExportConfiguration)
    ], UpdateExportConfigurationResponse.prototype, "bulkexportsV1ExportConfiguration", void 0);
    return UpdateExportConfigurationResponse;
}(SpeakeasyBase));
export { UpdateExportConfigurationResponse };
