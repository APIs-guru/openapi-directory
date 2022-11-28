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
import * as shared from "../shared";
export var ListMessagingConfigurationServerList = [
    "https://verify.twilio.com",
];
var ListMessagingConfigurationPathParams = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationPathParams, _super);
    function ListMessagingConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationPathParams.prototype, "serviceSid", void 0);
    return ListMessagingConfigurationPathParams;
}(SpeakeasyBase));
export { ListMessagingConfigurationPathParams };
var ListMessagingConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationQueryParams, _super);
    function ListMessagingConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMessagingConfigurationQueryParams.prototype, "pageSize", void 0);
    return ListMessagingConfigurationQueryParams;
}(SpeakeasyBase));
export { ListMessagingConfigurationQueryParams };
var ListMessagingConfigurationSecurity = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationSecurity, _super);
    function ListMessagingConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMessagingConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMessagingConfigurationSecurity;
}(SpeakeasyBase));
export { ListMessagingConfigurationSecurity };
var ListMessagingConfigurationListMessagingConfigurationResponseMeta = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationListMessagingConfigurationResponseMeta, _super);
    function ListMessagingConfigurationListMessagingConfigurationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMessagingConfigurationListMessagingConfigurationResponseMeta.prototype, "url", void 0);
    return ListMessagingConfigurationListMessagingConfigurationResponseMeta;
}(SpeakeasyBase));
export { ListMessagingConfigurationListMessagingConfigurationResponseMeta };
var ListMessagingConfigurationListMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationListMessagingConfigurationResponse, _super);
    function ListMessagingConfigurationListMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messaging_configurations", elemType: shared.VerifyV2ServiceMessagingConfiguration }),
        __metadata("design:type", Array)
    ], ListMessagingConfigurationListMessagingConfigurationResponse.prototype, "messagingConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMessagingConfigurationListMessagingConfigurationResponseMeta)
    ], ListMessagingConfigurationListMessagingConfigurationResponse.prototype, "meta", void 0);
    return ListMessagingConfigurationListMessagingConfigurationResponse;
}(SpeakeasyBase));
export { ListMessagingConfigurationListMessagingConfigurationResponse };
var ListMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationRequest, _super);
    function ListMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessagingConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingConfigurationPathParams)
    ], ListMessagingConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingConfigurationQueryParams)
    ], ListMessagingConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingConfigurationSecurity)
    ], ListMessagingConfigurationRequest.prototype, "security", void 0);
    return ListMessagingConfigurationRequest;
}(SpeakeasyBase));
export { ListMessagingConfigurationRequest };
var ListMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(ListMessagingConfigurationResponse, _super);
    function ListMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessagingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessagingConfigurationListMessagingConfigurationResponse)
    ], ListMessagingConfigurationResponse.prototype, "listMessagingConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMessagingConfigurationResponse.prototype, "statusCode", void 0);
    return ListMessagingConfigurationResponse;
}(SpeakeasyBase));
export { ListMessagingConfigurationResponse };
