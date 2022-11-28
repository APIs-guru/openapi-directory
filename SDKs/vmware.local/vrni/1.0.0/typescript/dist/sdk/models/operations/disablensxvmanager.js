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
var DisableNsxvManagerPathParams = /** @class */ (function (_super) {
    __extends(DisableNsxvManagerPathParams, _super);
    function DisableNsxvManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DisableNsxvManagerPathParams.prototype, "id", void 0);
    return DisableNsxvManagerPathParams;
}(SpeakeasyBase));
export { DisableNsxvManagerPathParams };
var DisableNsxvManagerSecurity = /** @class */ (function (_super) {
    __extends(DisableNsxvManagerSecurity, _super);
    function DisableNsxvManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DisableNsxvManagerSecurity.prototype, "apiKeyAuth", void 0);
    return DisableNsxvManagerSecurity;
}(SpeakeasyBase));
export { DisableNsxvManagerSecurity };
var DisableNsxvManagerRequest = /** @class */ (function (_super) {
    __extends(DisableNsxvManagerRequest, _super);
    function DisableNsxvManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableNsxvManagerPathParams)
    ], DisableNsxvManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableNsxvManagerSecurity)
    ], DisableNsxvManagerRequest.prototype, "security", void 0);
    return DisableNsxvManagerRequest;
}(SpeakeasyBase));
export { DisableNsxvManagerRequest };
var DisableNsxvManagerResponse = /** @class */ (function (_super) {
    __extends(DisableNsxvManagerResponse, _super);
    function DisableNsxvManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisableNsxvManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisableNsxvManagerResponse.prototype, "statusCode", void 0);
    return DisableNsxvManagerResponse;
}(SpeakeasyBase));
export { DisableNsxvManagerResponse };
