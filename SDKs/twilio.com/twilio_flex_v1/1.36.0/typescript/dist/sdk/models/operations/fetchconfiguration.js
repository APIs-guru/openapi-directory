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
export var FETCHCONFIGURATION_SERVERS = [
    "https://flex-api.twilio.com",
];
var FetchConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(FetchConfigurationQueryParams, _super);
    function FetchConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UiVersion" }),
        __metadata("design:type", String)
    ], FetchConfigurationQueryParams.prototype, "uiVersion", void 0);
    return FetchConfigurationQueryParams;
}(SpeakeasyBase));
export { FetchConfigurationQueryParams };
var FetchConfigurationSecurity = /** @class */ (function (_super) {
    __extends(FetchConfigurationSecurity, _super);
    function FetchConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConfigurationSecurity;
}(SpeakeasyBase));
export { FetchConfigurationSecurity };
var FetchConfigurationRequest = /** @class */ (function (_super) {
    __extends(FetchConfigurationRequest, _super);
    function FetchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConfigurationQueryParams)
    ], FetchConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConfigurationSecurity)
    ], FetchConfigurationRequest.prototype, "security", void 0);
    return FetchConfigurationRequest;
}(SpeakeasyBase));
export { FetchConfigurationRequest };
var FetchConfigurationResponse = /** @class */ (function (_super) {
    __extends(FetchConfigurationResponse, _super);
    function FetchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FlexV1Configuration)
    ], FetchConfigurationResponse.prototype, "flexV1Configuration", void 0);
    return FetchConfigurationResponse;
}(SpeakeasyBase));
export { FetchConfigurationResponse };
