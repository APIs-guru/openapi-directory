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
var GetScriptTagPathParams = /** @class */ (function (_super) {
    __extends(GetScriptTagPathParams, _super);
    function GetScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], GetScriptTagPathParams.prototype, "scriptTagId", void 0);
    return GetScriptTagPathParams;
}(SpeakeasyBase));
export { GetScriptTagPathParams };
var GetScriptTagSecurity = /** @class */ (function (_super) {
    __extends(GetScriptTagSecurity, _super);
    function GetScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetScriptTagSecurity.prototype, "oAuth2", void 0);
    return GetScriptTagSecurity;
}(SpeakeasyBase));
export { GetScriptTagSecurity };
export var GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["All"] = "all";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Cart"] = "cart";
})(GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var GetScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(GetScriptTag200ApplicationJsonScriptTag, _super);
    function GetScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return GetScriptTag200ApplicationJsonScriptTag;
}(SpeakeasyBase));
export { GetScriptTag200ApplicationJsonScriptTag };
var GetScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetScriptTag200ApplicationJson, _super);
    function GetScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", GetScriptTag200ApplicationJsonScriptTag)
    ], GetScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return GetScriptTag200ApplicationJson;
}(SpeakeasyBase));
export { GetScriptTag200ApplicationJson };
var GetScriptTagRequest = /** @class */ (function (_super) {
    __extends(GetScriptTagRequest, _super);
    function GetScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScriptTagPathParams)
    ], GetScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScriptTagSecurity)
    ], GetScriptTagRequest.prototype, "security", void 0);
    return GetScriptTagRequest;
}(SpeakeasyBase));
export { GetScriptTagRequest };
var GetScriptTagResponse = /** @class */ (function (_super) {
    __extends(GetScriptTagResponse, _super);
    function GetScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScriptTag200ApplicationJson)
    ], GetScriptTagResponse.prototype, "getScriptTag200ApplicationJsonObject", void 0);
    return GetScriptTagResponse;
}(SpeakeasyBase));
export { GetScriptTagResponse };
