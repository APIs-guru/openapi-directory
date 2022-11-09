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
export var GetGetColoredPathwayFormatEnum;
(function (GetGetColoredPathwayFormatEnum) {
    GetGetColoredPathwayFormatEnum["Json"] = "json";
    GetGetColoredPathwayFormatEnum["Xml"] = "xml";
    GetGetColoredPathwayFormatEnum["Html"] = "html";
    GetGetColoredPathwayFormatEnum["Dump"] = "dump";
    GetGetColoredPathwayFormatEnum["Jpg"] = "jpg";
    GetGetColoredPathwayFormatEnum["Pdf"] = "pdf";
})(GetGetColoredPathwayFormatEnum || (GetGetColoredPathwayFormatEnum = {}));
var GetGetColoredPathwayQueryParams = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayQueryParams, _super);
    function GetGetColoredPathwayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=color" }),
        __metadata("design:type", Array)
    ], GetGetColoredPathwayQueryParams.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fileType" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "fileType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=graphId" }),
        __metadata("design:type", Array)
    ], GetGetColoredPathwayQueryParams.prototype, "graphId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "pwId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=revision" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "revision", void 0);
    return GetGetColoredPathwayQueryParams;
}(SpeakeasyBase));
export { GetGetColoredPathwayQueryParams };
var GetGetColoredPathwayRequest = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayRequest, _super);
    function GetGetColoredPathwayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetColoredPathwayQueryParams)
    ], GetGetColoredPathwayRequest.prototype, "queryParams", void 0);
    return GetGetColoredPathwayRequest;
}(SpeakeasyBase));
export { GetGetColoredPathwayRequest };
var GetGetColoredPathwayResponse = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayResponse, _super);
    function GetGetColoredPathwayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetColoredPathwayResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetColoredPathwayResponse.prototype, "statusCode", void 0);
    return GetGetColoredPathwayResponse;
}(SpeakeasyBase));
export { GetGetColoredPathwayResponse };
