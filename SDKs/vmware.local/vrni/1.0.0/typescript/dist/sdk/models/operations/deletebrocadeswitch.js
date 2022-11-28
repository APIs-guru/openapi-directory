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
var DeleteBrocadeSwitchPathParams = /** @class */ (function (_super) {
    __extends(DeleteBrocadeSwitchPathParams, _super);
    function DeleteBrocadeSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteBrocadeSwitchPathParams.prototype, "id", void 0);
    return DeleteBrocadeSwitchPathParams;
}(SpeakeasyBase));
export { DeleteBrocadeSwitchPathParams };
var DeleteBrocadeSwitchSecurity = /** @class */ (function (_super) {
    __extends(DeleteBrocadeSwitchSecurity, _super);
    function DeleteBrocadeSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DeleteBrocadeSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return DeleteBrocadeSwitchSecurity;
}(SpeakeasyBase));
export { DeleteBrocadeSwitchSecurity };
var DeleteBrocadeSwitchRequest = /** @class */ (function (_super) {
    __extends(DeleteBrocadeSwitchRequest, _super);
    function DeleteBrocadeSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBrocadeSwitchPathParams)
    ], DeleteBrocadeSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteBrocadeSwitchSecurity)
    ], DeleteBrocadeSwitchRequest.prototype, "security", void 0);
    return DeleteBrocadeSwitchRequest;
}(SpeakeasyBase));
export { DeleteBrocadeSwitchRequest };
var DeleteBrocadeSwitchResponse = /** @class */ (function (_super) {
    __extends(DeleteBrocadeSwitchResponse, _super);
    function DeleteBrocadeSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteBrocadeSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteBrocadeSwitchResponse.prototype, "statusCode", void 0);
    return DeleteBrocadeSwitchResponse;
}(SpeakeasyBase));
export { DeleteBrocadeSwitchResponse };
