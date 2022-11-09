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
var GetExamplesByLabel1QueryParams = /** @class */ (function (_super) {
    __extends(GetExamplesByLabel1QueryParams, _super);
    function GetExamplesByLabel1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetExamplesByLabel1QueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=labelId" }),
        __metadata("design:type", String)
    ], GetExamplesByLabel1QueryParams.prototype, "labelId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetExamplesByLabel1QueryParams.prototype, "offset", void 0);
    return GetExamplesByLabel1QueryParams;
}(SpeakeasyBase));
export { GetExamplesByLabel1QueryParams };
var GetExamplesByLabel1Security = /** @class */ (function (_super) {
    __extends(GetExamplesByLabel1Security, _super);
    function GetExamplesByLabel1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetExamplesByLabel1Security.prototype, "bearerToken", void 0);
    return GetExamplesByLabel1Security;
}(SpeakeasyBase));
export { GetExamplesByLabel1Security };
var GetExamplesByLabel1Request = /** @class */ (function (_super) {
    __extends(GetExamplesByLabel1Request, _super);
    function GetExamplesByLabel1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetExamplesByLabel1QueryParams)
    ], GetExamplesByLabel1Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExamplesByLabel1Security)
    ], GetExamplesByLabel1Request.prototype, "security", void 0);
    return GetExamplesByLabel1Request;
}(SpeakeasyBase));
export { GetExamplesByLabel1Request };
var GetExamplesByLabel1Response = /** @class */ (function (_super) {
    __extends(GetExamplesByLabel1Response, _super);
    function GetExamplesByLabel1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetExamplesByLabel1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExampleList)
    ], GetExamplesByLabel1Response.prototype, "exampleList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetExamplesByLabel1Response.prototype, "statusCode", void 0);
    return GetExamplesByLabel1Response;
}(SpeakeasyBase));
export { GetExamplesByLabel1Response };
