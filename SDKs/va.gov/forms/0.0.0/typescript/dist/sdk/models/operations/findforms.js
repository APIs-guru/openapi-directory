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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FindFormsQueryParams = /** @class */ (function (_super) {
    __extends(FindFormsQueryParams, _super);
    function FindFormsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], FindFormsQueryParams.prototype, "query", void 0);
    return FindFormsQueryParams;
}(SpeakeasyBase));
export { FindFormsQueryParams };
var FindFormsSecurity = /** @class */ (function (_super) {
    __extends(FindFormsSecurity, _super);
    function FindFormsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], FindFormsSecurity.prototype, "apikey", void 0);
    return FindFormsSecurity;
}(SpeakeasyBase));
export { FindFormsSecurity };
var FindFormsRequest = /** @class */ (function (_super) {
    __extends(FindFormsRequest, _super);
    function FindFormsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindFormsQueryParams)
    ], FindFormsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindFormsSecurity)
    ], FindFormsRequest.prototype, "security", void 0);
    return FindFormsRequest;
}(SpeakeasyBase));
export { FindFormsRequest };
var FindForms200ApplicationJson = /** @class */ (function (_super) {
    __extends(FindForms200ApplicationJson, _super);
    function FindForms200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], FindForms200ApplicationJson.prototype, "data", void 0);
    return FindForms200ApplicationJson;
}(SpeakeasyBase));
export { FindForms200ApplicationJson };
var FindFormsResponse = /** @class */ (function (_super) {
    __extends(FindFormsResponse, _super);
    function FindFormsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindFormsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindFormsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindForms200ApplicationJson)
    ], FindFormsResponse.prototype, "findForms200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindFormsResponse.prototype, "findForms401ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FindFormsResponse.prototype, "findForms429ApplicationJsonAny", void 0);
    return FindFormsResponse;
}(SpeakeasyBase));
export { FindFormsResponse };
