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
export var GetUpdatePathwayFormatEnum;
(function (GetUpdatePathwayFormatEnum) {
    GetUpdatePathwayFormatEnum["Json"] = "json";
    GetUpdatePathwayFormatEnum["Xml"] = "xml";
    GetUpdatePathwayFormatEnum["Html"] = "html";
    GetUpdatePathwayFormatEnum["Dump"] = "dump";
    GetUpdatePathwayFormatEnum["Jpg"] = "jpg";
    GetUpdatePathwayFormatEnum["Pdf"] = "pdf";
})(GetUpdatePathwayFormatEnum || (GetUpdatePathwayFormatEnum = {}));
var GetUpdatePathwayQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdatePathwayQueryParams, _super);
    function GetUpdatePathwayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=auth" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "auth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gpml" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "gpml", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "pwId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=revision" }),
        __metadata("design:type", Number)
    ], GetUpdatePathwayQueryParams.prototype, "revision", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetUpdatePathwayQueryParams.prototype, "username", void 0);
    return GetUpdatePathwayQueryParams;
}(SpeakeasyBase));
export { GetUpdatePathwayQueryParams };
var GetUpdatePathwayRequest = /** @class */ (function (_super) {
    __extends(GetUpdatePathwayRequest, _super);
    function GetUpdatePathwayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdatePathwayQueryParams)
    ], GetUpdatePathwayRequest.prototype, "queryParams", void 0);
    return GetUpdatePathwayRequest;
}(SpeakeasyBase));
export { GetUpdatePathwayRequest };
var GetUpdatePathwayResponse = /** @class */ (function (_super) {
    __extends(GetUpdatePathwayResponse, _super);
    function GetUpdatePathwayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdatePathwayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdatePathwayResponse.prototype, "statusCode", void 0);
    return GetUpdatePathwayResponse;
}(SpeakeasyBase));
export { GetUpdatePathwayResponse };
