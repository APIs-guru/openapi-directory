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
var GetDistributedVirtualSwitchPathParams = /** @class */ (function (_super) {
    __extends(GetDistributedVirtualSwitchPathParams, _super);
    function GetDistributedVirtualSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDistributedVirtualSwitchPathParams.prototype, "id", void 0);
    return GetDistributedVirtualSwitchPathParams;
}(SpeakeasyBase));
export { GetDistributedVirtualSwitchPathParams };
var GetDistributedVirtualSwitchQueryParams = /** @class */ (function (_super) {
    __extends(GetDistributedVirtualSwitchQueryParams, _super);
    function GetDistributedVirtualSwitchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetDistributedVirtualSwitchQueryParams.prototype, "time", void 0);
    return GetDistributedVirtualSwitchQueryParams;
}(SpeakeasyBase));
export { GetDistributedVirtualSwitchQueryParams };
var GetDistributedVirtualSwitchSecurity = /** @class */ (function (_super) {
    __extends(GetDistributedVirtualSwitchSecurity, _super);
    function GetDistributedVirtualSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetDistributedVirtualSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return GetDistributedVirtualSwitchSecurity;
}(SpeakeasyBase));
export { GetDistributedVirtualSwitchSecurity };
var GetDistributedVirtualSwitchRequest = /** @class */ (function (_super) {
    __extends(GetDistributedVirtualSwitchRequest, _super);
    function GetDistributedVirtualSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistributedVirtualSwitchPathParams)
    ], GetDistributedVirtualSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistributedVirtualSwitchQueryParams)
    ], GetDistributedVirtualSwitchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistributedVirtualSwitchSecurity)
    ], GetDistributedVirtualSwitchRequest.prototype, "security", void 0);
    return GetDistributedVirtualSwitchRequest;
}(SpeakeasyBase));
export { GetDistributedVirtualSwitchRequest };
var GetDistributedVirtualSwitchResponse = /** @class */ (function (_super) {
    __extends(GetDistributedVirtualSwitchResponse, _super);
    function GetDistributedVirtualSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetDistributedVirtualSwitchResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistributedVirtualSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DistributedVirtualSwitch)
    ], GetDistributedVirtualSwitchResponse.prototype, "distributedVirtualSwitch", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistributedVirtualSwitchResponse.prototype, "statusCode", void 0);
    return GetDistributedVirtualSwitchResponse;
}(SpeakeasyBase));
export { GetDistributedVirtualSwitchResponse };
