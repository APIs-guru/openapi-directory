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
var UpdateScriptTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateScriptTagPathParams, _super);
    function UpdateScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], UpdateScriptTagPathParams.prototype, "scriptTagId", void 0);
    return UpdateScriptTagPathParams;
}(SpeakeasyBase));
export { UpdateScriptTagPathParams };
export var UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["All"] = "all";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum || (UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var UpdateScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequestBodyScriptTag, _super);
    function UpdateScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return UpdateScriptTagRequestBodyScriptTag;
}(SpeakeasyBase));
export { UpdateScriptTagRequestBodyScriptTag };
var UpdateScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequestBody, _super);
    function UpdateScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateScriptTagRequestBodyScriptTag)
    ], UpdateScriptTagRequestBody.prototype, "scriptTag", void 0);
    return UpdateScriptTagRequestBody;
}(SpeakeasyBase));
export { UpdateScriptTagRequestBody };
var UpdateScriptTagSecurity = /** @class */ (function (_super) {
    __extends(UpdateScriptTagSecurity, _super);
    function UpdateScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateScriptTagSecurity.prototype, "oAuth2", void 0);
    return UpdateScriptTagSecurity;
}(SpeakeasyBase));
export { UpdateScriptTagSecurity };
export var UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["All"] = "all";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var UpdateScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(UpdateScriptTag200ApplicationJsonScriptTag, _super);
    function UpdateScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return UpdateScriptTag200ApplicationJsonScriptTag;
}(SpeakeasyBase));
export { UpdateScriptTag200ApplicationJsonScriptTag };
var UpdateScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateScriptTag200ApplicationJson, _super);
    function UpdateScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateScriptTag200ApplicationJsonScriptTag)
    ], UpdateScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return UpdateScriptTag200ApplicationJson;
}(SpeakeasyBase));
export { UpdateScriptTag200ApplicationJson };
var UpdateScriptTagRequest = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequest, _super);
    function UpdateScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScriptTagPathParams)
    ], UpdateScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateScriptTagRequestBody)
    ], UpdateScriptTagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScriptTagSecurity)
    ], UpdateScriptTagRequest.prototype, "security", void 0);
    return UpdateScriptTagRequest;
}(SpeakeasyBase));
export { UpdateScriptTagRequest };
var UpdateScriptTagResponse = /** @class */ (function (_super) {
    __extends(UpdateScriptTagResponse, _super);
    function UpdateScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScriptTag200ApplicationJson)
    ], UpdateScriptTagResponse.prototype, "updateScriptTag200ApplicationJsonObject", void 0);
    return UpdateScriptTagResponse;
}(SpeakeasyBase));
export { UpdateScriptTagResponse };
