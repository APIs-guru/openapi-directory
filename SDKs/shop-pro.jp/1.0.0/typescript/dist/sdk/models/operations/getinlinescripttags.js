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
var GetInlineScriptTagsSecurity = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagsSecurity, _super);
    function GetInlineScriptTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetInlineScriptTagsSecurity.prototype, "oAuth2", void 0);
    return GetInlineScriptTagsSecurity;
}(SpeakeasyBase));
export { GetInlineScriptTagsSecurity };
export var GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum;
(function (GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum) {
    GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum["All"] = "all";
    GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum["ThanksPage"] = "thanks_page";
    GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum["Cart"] = "cart";
})(GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum || (GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum = {}));
export var GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum;
(function (GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum) {
    GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum || (GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum = {}));
var GetInlineScriptTags200ApplicationJsonInlineScriptTags = /** @class */ (function (_super) {
    __extends(GetInlineScriptTags200ApplicationJsonInlineScriptTags, _super);
    function GetInlineScriptTags200ApplicationJsonInlineScriptTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "oauthApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "triggerEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTags200ApplicationJsonInlineScriptTags.prototype, "updateDate", void 0);
    return GetInlineScriptTags200ApplicationJsonInlineScriptTags;
}(SpeakeasyBase));
export { GetInlineScriptTags200ApplicationJsonInlineScriptTags };
var GetInlineScriptTags200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInlineScriptTags200ApplicationJson, _super);
    function GetInlineScriptTags200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inline_script_tags", elemType: GetInlineScriptTags200ApplicationJsonInlineScriptTags }),
        __metadata("design:type", Array)
    ], GetInlineScriptTags200ApplicationJson.prototype, "inlineScriptTags", void 0);
    return GetInlineScriptTags200ApplicationJson;
}(SpeakeasyBase));
export { GetInlineScriptTags200ApplicationJson };
var GetInlineScriptTagsRequest = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagsRequest, _super);
    function GetInlineScriptTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInlineScriptTagsSecurity)
    ], GetInlineScriptTagsRequest.prototype, "security", void 0);
    return GetInlineScriptTagsRequest;
}(SpeakeasyBase));
export { GetInlineScriptTagsRequest };
var GetInlineScriptTagsResponse = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagsResponse, _super);
    function GetInlineScriptTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInlineScriptTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInlineScriptTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInlineScriptTags200ApplicationJson)
    ], GetInlineScriptTagsResponse.prototype, "getInlineScriptTags200ApplicationJsonObject", void 0);
    return GetInlineScriptTagsResponse;
}(SpeakeasyBase));
export { GetInlineScriptTagsResponse };
