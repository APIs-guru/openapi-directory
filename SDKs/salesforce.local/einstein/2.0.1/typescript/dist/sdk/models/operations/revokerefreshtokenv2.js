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
var RevokeRefreshTokenV2PathParams = /** @class */ (function (_super) {
    __extends(RevokeRefreshTokenV2PathParams, _super);
    function RevokeRefreshTokenV2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], RevokeRefreshTokenV2PathParams.prototype, "token", void 0);
    return RevokeRefreshTokenV2PathParams;
}(SpeakeasyBase));
export { RevokeRefreshTokenV2PathParams };
var RevokeRefreshTokenV2Security = /** @class */ (function (_super) {
    __extends(RevokeRefreshTokenV2Security, _super);
    function RevokeRefreshTokenV2Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], RevokeRefreshTokenV2Security.prototype, "bearerToken", void 0);
    return RevokeRefreshTokenV2Security;
}(SpeakeasyBase));
export { RevokeRefreshTokenV2Security };
var RevokeRefreshTokenV2Request = /** @class */ (function (_super) {
    __extends(RevokeRefreshTokenV2Request, _super);
    function RevokeRefreshTokenV2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeRefreshTokenV2PathParams)
    ], RevokeRefreshTokenV2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeRefreshTokenV2Security)
    ], RevokeRefreshTokenV2Request.prototype, "security", void 0);
    return RevokeRefreshTokenV2Request;
}(SpeakeasyBase));
export { RevokeRefreshTokenV2Request };
var RevokeRefreshTokenV2Response = /** @class */ (function (_super) {
    __extends(RevokeRefreshTokenV2Response, _super);
    function RevokeRefreshTokenV2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevokeRefreshTokenV2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevokeRefreshTokenV2Response.prototype, "statusCode", void 0);
    return RevokeRefreshTokenV2Response;
}(SpeakeasyBase));
export { RevokeRefreshTokenV2Response };
