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
var GetExamples1PathParams = /** @class */ (function (_super) {
    __extends(GetExamples1PathParams, _super);
    function GetExamples1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], GetExamples1PathParams.prototype, "datasetId", void 0);
    return GetExamples1PathParams;
}(SpeakeasyBase));
export { GetExamples1PathParams };
export var GetExamples1SourceEnum;
(function (GetExamples1SourceEnum) {
    GetExamples1SourceEnum["All"] = "all";
    GetExamples1SourceEnum["Feedback"] = "feedback";
    GetExamples1SourceEnum["Upload"] = "upload";
})(GetExamples1SourceEnum || (GetExamples1SourceEnum = {}));
var GetExamples1QueryParams = /** @class */ (function (_super) {
    __extends(GetExamples1QueryParams, _super);
    function GetExamples1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetExamples1QueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetExamples1QueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetExamples1QueryParams.prototype, "source", void 0);
    return GetExamples1QueryParams;
}(SpeakeasyBase));
export { GetExamples1QueryParams };
var GetExamples1Security = /** @class */ (function (_super) {
    __extends(GetExamples1Security, _super);
    function GetExamples1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetExamples1Security.prototype, "bearerToken", void 0);
    return GetExamples1Security;
}(SpeakeasyBase));
export { GetExamples1Security };
var GetExamples1Request = /** @class */ (function (_super) {
    __extends(GetExamples1Request, _super);
    function GetExamples1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetExamples1PathParams)
    ], GetExamples1Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExamples1QueryParams)
    ], GetExamples1Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExamples1Security)
    ], GetExamples1Request.prototype, "security", void 0);
    return GetExamples1Request;
}(SpeakeasyBase));
export { GetExamples1Request };
var GetExamples1Response = /** @class */ (function (_super) {
    __extends(GetExamples1Response, _super);
    function GetExamples1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetExamples1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExampleList)
    ], GetExamples1Response.prototype, "exampleList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetExamples1Response.prototype, "statusCode", void 0);
    return GetExamples1Response;
}(SpeakeasyBase));
export { GetExamples1Response };
