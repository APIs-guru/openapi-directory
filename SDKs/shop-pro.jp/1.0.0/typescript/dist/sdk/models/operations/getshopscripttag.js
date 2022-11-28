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
var GetShopScriptTagPathParams = /** @class */ (function (_super) {
    __extends(GetShopScriptTagPathParams, _super);
    function GetShopScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], GetShopScriptTagPathParams.prototype, "scriptTagId", void 0);
    return GetShopScriptTagPathParams;
}(SpeakeasyBase));
export { GetShopScriptTagPathParams };
var GetShopScriptTagSecurity = /** @class */ (function (_super) {
    __extends(GetShopScriptTagSecurity, _super);
    function GetShopScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetShopScriptTagSecurity.prototype, "oAuth2", void 0);
    return GetShopScriptTagSecurity;
}(SpeakeasyBase));
export { GetShopScriptTagSecurity };
export var GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var GetShopScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(GetShopScriptTag200ApplicationJsonScriptTag, _super);
    function GetShopScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "integrity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetShopScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return GetShopScriptTag200ApplicationJsonScriptTag;
}(SpeakeasyBase));
export { GetShopScriptTag200ApplicationJsonScriptTag };
var GetShopScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetShopScriptTag200ApplicationJson, _super);
    function GetShopScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", GetShopScriptTag200ApplicationJsonScriptTag)
    ], GetShopScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return GetShopScriptTag200ApplicationJson;
}(SpeakeasyBase));
export { GetShopScriptTag200ApplicationJson };
var GetShopScriptTagRequest = /** @class */ (function (_super) {
    __extends(GetShopScriptTagRequest, _super);
    function GetShopScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShopScriptTagPathParams)
    ], GetShopScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShopScriptTagSecurity)
    ], GetShopScriptTagRequest.prototype, "security", void 0);
    return GetShopScriptTagRequest;
}(SpeakeasyBase));
export { GetShopScriptTagRequest };
var GetShopScriptTagResponse = /** @class */ (function (_super) {
    __extends(GetShopScriptTagResponse, _super);
    function GetShopScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShopScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShopScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShopScriptTag200ApplicationJson)
    ], GetShopScriptTagResponse.prototype, "getShopScriptTag200ApplicationJsonObject", void 0);
    return GetShopScriptTagResponse;
}(SpeakeasyBase));
export { GetShopScriptTagResponse };
