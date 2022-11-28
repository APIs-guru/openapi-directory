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
var GetExamplesPathParams = /** @class */ (function (_super) {
    __extends(GetExamplesPathParams, _super);
    function GetExamplesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], GetExamplesPathParams.prototype, "datasetId", void 0);
    return GetExamplesPathParams;
}(SpeakeasyBase));
export { GetExamplesPathParams };
export var GetExamplesSourceEnum;
(function (GetExamplesSourceEnum) {
    GetExamplesSourceEnum["All"] = "all";
    GetExamplesSourceEnum["Feedback"] = "feedback";
    GetExamplesSourceEnum["Upload"] = "upload";
})(GetExamplesSourceEnum || (GetExamplesSourceEnum = {}));
var GetExamplesQueryParams = /** @class */ (function (_super) {
    __extends(GetExamplesQueryParams, _super);
    function GetExamplesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetExamplesQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetExamplesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetExamplesQueryParams.prototype, "source", void 0);
    return GetExamplesQueryParams;
}(SpeakeasyBase));
export { GetExamplesQueryParams };
var GetExamplesSecurity = /** @class */ (function (_super) {
    __extends(GetExamplesSecurity, _super);
    function GetExamplesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetExamplesSecurity.prototype, "bearerToken", void 0);
    return GetExamplesSecurity;
}(SpeakeasyBase));
export { GetExamplesSecurity };
var GetExamplesRequest = /** @class */ (function (_super) {
    __extends(GetExamplesRequest, _super);
    function GetExamplesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExamplesPathParams)
    ], GetExamplesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExamplesQueryParams)
    ], GetExamplesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExamplesSecurity)
    ], GetExamplesRequest.prototype, "security", void 0);
    return GetExamplesRequest;
}(SpeakeasyBase));
export { GetExamplesRequest };
var GetExamplesResponse = /** @class */ (function (_super) {
    __extends(GetExamplesResponse, _super);
    function GetExamplesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExamplesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExampleList)
    ], GetExamplesResponse.prototype, "exampleList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExamplesResponse.prototype, "statusCode", void 0);
    return GetExamplesResponse;
}(SpeakeasyBase));
export { GetExamplesResponse };
