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
export var CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum || (CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var CreateShopScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequestBodyScriptTag, _super);
    function CreateShopScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "integrity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return CreateShopScriptTagRequestBodyScriptTag;
}(SpeakeasyBase));
export { CreateShopScriptTagRequestBodyScriptTag };
var CreateShopScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequestBody, _super);
    function CreateShopScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateShopScriptTagRequestBodyScriptTag)
    ], CreateShopScriptTagRequestBody.prototype, "scriptTag", void 0);
    return CreateShopScriptTagRequestBody;
}(SpeakeasyBase));
export { CreateShopScriptTagRequestBody };
var CreateShopScriptTagSecurity = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagSecurity, _super);
    function CreateShopScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateShopScriptTagSecurity.prototype, "oAuth2", void 0);
    return CreateShopScriptTagSecurity;
}(SpeakeasyBase));
export { CreateShopScriptTagSecurity };
export var CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var CreateShopScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(CreateShopScriptTag200ApplicationJsonScriptTag, _super);
    function CreateShopScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "integrity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return CreateShopScriptTag200ApplicationJsonScriptTag;
}(SpeakeasyBase));
export { CreateShopScriptTag200ApplicationJsonScriptTag };
var CreateShopScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateShopScriptTag200ApplicationJson, _super);
    function CreateShopScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateShopScriptTag200ApplicationJsonScriptTag)
    ], CreateShopScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return CreateShopScriptTag200ApplicationJson;
}(SpeakeasyBase));
export { CreateShopScriptTag200ApplicationJson };
var CreateShopScriptTagRequest = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequest, _super);
    function CreateShopScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateShopScriptTagRequestBody)
    ], CreateShopScriptTagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateShopScriptTagSecurity)
    ], CreateShopScriptTagRequest.prototype, "security", void 0);
    return CreateShopScriptTagRequest;
}(SpeakeasyBase));
export { CreateShopScriptTagRequest };
var CreateShopScriptTagResponse = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagResponse, _super);
    function CreateShopScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateShopScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateShopScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateShopScriptTag200ApplicationJson)
    ], CreateShopScriptTagResponse.prototype, "createShopScriptTag200ApplicationJsonObject", void 0);
    return CreateShopScriptTagResponse;
}(SpeakeasyBase));
export { CreateShopScriptTagResponse };
