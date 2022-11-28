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
var PostSecurityRefreshSecurity = /** @class */ (function (_super) {
    __extends(PostSecurityRefreshSecurity, _super);
    function PostSecurityRefreshSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwtRefresh)
    ], PostSecurityRefreshSecurity.prototype, "jwtRefresh", void 0);
    return PostSecurityRefreshSecurity;
}(SpeakeasyBase));
export { PostSecurityRefreshSecurity };
var PostSecurityRefresh200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityRefresh200ApplicationJson, _super);
    function PostSecurityRefresh200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], PostSecurityRefresh200ApplicationJson.prototype, "accessToken", void 0);
    return PostSecurityRefresh200ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityRefresh200ApplicationJson };
var PostSecurityRefresh401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityRefresh401ApplicationJson, _super);
    function PostSecurityRefresh401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSecurityRefresh401ApplicationJson.prototype, "message", void 0);
    return PostSecurityRefresh401ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityRefresh401ApplicationJson };
var PostSecurityRefresh500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostSecurityRefresh500ApplicationJson, _super);
    function PostSecurityRefresh500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostSecurityRefresh500ApplicationJson.prototype, "message", void 0);
    return PostSecurityRefresh500ApplicationJson;
}(SpeakeasyBase));
export { PostSecurityRefresh500ApplicationJson };
var PostSecurityRefreshRequest = /** @class */ (function (_super) {
    __extends(PostSecurityRefreshRequest, _super);
    function PostSecurityRefreshRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityRefreshSecurity)
    ], PostSecurityRefreshRequest.prototype, "security", void 0);
    return PostSecurityRefreshRequest;
}(SpeakeasyBase));
export { PostSecurityRefreshRequest };
var PostSecurityRefreshResponse = /** @class */ (function (_super) {
    __extends(PostSecurityRefreshResponse, _super);
    function PostSecurityRefreshResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSecurityRefreshResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityRefresh200ApplicationJson)
    ], PostSecurityRefreshResponse.prototype, "postSecurityRefresh200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityRefresh401ApplicationJson)
    ], PostSecurityRefreshResponse.prototype, "postSecurityRefresh401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSecurityRefresh500ApplicationJson)
    ], PostSecurityRefreshResponse.prototype, "postSecurityRefresh500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSecurityRefreshResponse.prototype, "statusCode", void 0);
    return PostSecurityRefreshResponse;
}(SpeakeasyBase));
export { PostSecurityRefreshResponse };
