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
var GetExamplesByLabelQueryParams = /** @class */ (function (_super) {
    __extends(GetExamplesByLabelQueryParams, _super);
    function GetExamplesByLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetExamplesByLabelQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelId" }),
        __metadata("design:type", String)
    ], GetExamplesByLabelQueryParams.prototype, "labelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetExamplesByLabelQueryParams.prototype, "offset", void 0);
    return GetExamplesByLabelQueryParams;
}(SpeakeasyBase));
export { GetExamplesByLabelQueryParams };
var GetExamplesByLabelSecurity = /** @class */ (function (_super) {
    __extends(GetExamplesByLabelSecurity, _super);
    function GetExamplesByLabelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetExamplesByLabelSecurity.prototype, "bearerToken", void 0);
    return GetExamplesByLabelSecurity;
}(SpeakeasyBase));
export { GetExamplesByLabelSecurity };
var GetExamplesByLabelRequest = /** @class */ (function (_super) {
    __extends(GetExamplesByLabelRequest, _super);
    function GetExamplesByLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExamplesByLabelQueryParams)
    ], GetExamplesByLabelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExamplesByLabelSecurity)
    ], GetExamplesByLabelRequest.prototype, "security", void 0);
    return GetExamplesByLabelRequest;
}(SpeakeasyBase));
export { GetExamplesByLabelRequest };
var GetExamplesByLabelResponse = /** @class */ (function (_super) {
    __extends(GetExamplesByLabelResponse, _super);
    function GetExamplesByLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExamplesByLabelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExampleList)
    ], GetExamplesByLabelResponse.prototype, "exampleList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExamplesByLabelResponse.prototype, "statusCode", void 0);
    return GetExamplesByLabelResponse;
}(SpeakeasyBase));
export { GetExamplesByLabelResponse };
