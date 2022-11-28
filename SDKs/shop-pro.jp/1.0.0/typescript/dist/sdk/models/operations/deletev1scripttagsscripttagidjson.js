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
var DeleteV1ScriptTagsScriptTagIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonPathParams, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], DeleteV1ScriptTagsScriptTagIdJsonPathParams.prototype, "scriptTagId", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteV1ScriptTagsScriptTagIdJsonPathParams };
var DeleteV1ScriptTagsScriptTagIdJsonSecurity = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonSecurity, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteV1ScriptTagsScriptTagIdJsonSecurity.prototype, "oAuth2", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonSecurity;
}(SpeakeasyBase));
export { DeleteV1ScriptTagsScriptTagIdJsonSecurity };
var DeleteV1ScriptTagsScriptTagIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonRequest, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteV1ScriptTagsScriptTagIdJsonPathParams)
    ], DeleteV1ScriptTagsScriptTagIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteV1ScriptTagsScriptTagIdJsonSecurity)
    ], DeleteV1ScriptTagsScriptTagIdJsonRequest.prototype, "security", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonRequest;
}(SpeakeasyBase));
export { DeleteV1ScriptTagsScriptTagIdJsonRequest };
var DeleteV1ScriptTagsScriptTagIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonResponse, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteV1ScriptTagsScriptTagIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteV1ScriptTagsScriptTagIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonResponse;
}(SpeakeasyBase));
export { DeleteV1ScriptTagsScriptTagIdJsonResponse };
