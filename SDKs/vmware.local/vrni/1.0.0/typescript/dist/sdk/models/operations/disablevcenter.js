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
var DisableVcenterPathParams = /** @class */ (function (_super) {
    __extends(DisableVcenterPathParams, _super);
    function DisableVcenterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DisableVcenterPathParams.prototype, "id", void 0);
    return DisableVcenterPathParams;
}(SpeakeasyBase));
export { DisableVcenterPathParams };
var DisableVcenterSecurity = /** @class */ (function (_super) {
    __extends(DisableVcenterSecurity, _super);
    function DisableVcenterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DisableVcenterSecurity.prototype, "apiKeyAuth", void 0);
    return DisableVcenterSecurity;
}(SpeakeasyBase));
export { DisableVcenterSecurity };
var DisableVcenterRequest = /** @class */ (function (_super) {
    __extends(DisableVcenterRequest, _super);
    function DisableVcenterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableVcenterPathParams)
    ], DisableVcenterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableVcenterSecurity)
    ], DisableVcenterRequest.prototype, "security", void 0);
    return DisableVcenterRequest;
}(SpeakeasyBase));
export { DisableVcenterRequest };
var DisableVcenterResponse = /** @class */ (function (_super) {
    __extends(DisableVcenterResponse, _super);
    function DisableVcenterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisableVcenterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisableVcenterResponse.prototype, "statusCode", void 0);
    return DisableVcenterResponse;
}(SpeakeasyBase));
export { DisableVcenterResponse };
