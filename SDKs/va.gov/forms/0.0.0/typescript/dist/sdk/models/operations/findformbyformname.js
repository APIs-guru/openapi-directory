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
var FindFormByFormNamePathParams = /** @class */ (function (_super) {
    __extends(FindFormByFormNamePathParams, _super);
    function FindFormByFormNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_name" }),
        __metadata("design:type", String)
    ], FindFormByFormNamePathParams.prototype, "formName", void 0);
    return FindFormByFormNamePathParams;
}(SpeakeasyBase));
export { FindFormByFormNamePathParams };
var FindFormByFormNameSecurity = /** @class */ (function (_super) {
    __extends(FindFormByFormNameSecurity, _super);
    function FindFormByFormNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], FindFormByFormNameSecurity.prototype, "apikey", void 0);
    return FindFormByFormNameSecurity;
}(SpeakeasyBase));
export { FindFormByFormNameSecurity };
var FindFormByFormName200ApplicationJson = /** @class */ (function (_super) {
    __extends(FindFormByFormName200ApplicationJson, _super);
    function FindFormByFormName200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], FindFormByFormName200ApplicationJson.prototype, "data", void 0);
    return FindFormByFormName200ApplicationJson;
}(SpeakeasyBase));
export { FindFormByFormName200ApplicationJson };
var FindFormByFormName404ApplicationJson = /** @class */ (function (_super) {
    __extends(FindFormByFormName404ApplicationJson, _super);
    function FindFormByFormName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], FindFormByFormName404ApplicationJson.prototype, "errors", void 0);
    return FindFormByFormName404ApplicationJson;
}(SpeakeasyBase));
export { FindFormByFormName404ApplicationJson };
var FindFormByFormNameRequest = /** @class */ (function (_super) {
    __extends(FindFormByFormNameRequest, _super);
    function FindFormByFormNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindFormByFormNamePathParams)
    ], FindFormByFormNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindFormByFormNameSecurity)
    ], FindFormByFormNameRequest.prototype, "security", void 0);
    return FindFormByFormNameRequest;
}(SpeakeasyBase));
export { FindFormByFormNameRequest };
var FindFormByFormNameResponse = /** @class */ (function (_super) {
    __extends(FindFormByFormNameResponse, _super);
    function FindFormByFormNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FindFormByFormNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FindFormByFormNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindFormByFormName200ApplicationJson)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName401ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindFormByFormName404ApplicationJson)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FindFormByFormNameResponse.prototype, "findFormByFormName429ApplicationJsonAny", void 0);
    return FindFormByFormNameResponse;
}(SpeakeasyBase));
export { FindFormByFormNameResponse };
