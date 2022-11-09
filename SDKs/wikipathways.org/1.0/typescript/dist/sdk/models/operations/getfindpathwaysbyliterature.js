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
export var GetFindPathwaysByLiteratureFormatEnum;
(function (GetFindPathwaysByLiteratureFormatEnum) {
    GetFindPathwaysByLiteratureFormatEnum["Json"] = "json";
    GetFindPathwaysByLiteratureFormatEnum["Xml"] = "xml";
    GetFindPathwaysByLiteratureFormatEnum["Html"] = "html";
    GetFindPathwaysByLiteratureFormatEnum["Dump"] = "dump";
    GetFindPathwaysByLiteratureFormatEnum["Jpg"] = "jpg";
    GetFindPathwaysByLiteratureFormatEnum["Pdf"] = "pdf";
})(GetFindPathwaysByLiteratureFormatEnum || (GetFindPathwaysByLiteratureFormatEnum = {}));
var GetFindPathwaysByLiteratureQueryParams = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByLiteratureQueryParams, _super);
    function GetFindPathwaysByLiteratureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByLiteratureQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByLiteratureQueryParams.prototype, "query", void 0);
    return GetFindPathwaysByLiteratureQueryParams;
}(SpeakeasyBase));
export { GetFindPathwaysByLiteratureQueryParams };
var GetFindPathwaysByLiteratureRequest = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByLiteratureRequest, _super);
    function GetFindPathwaysByLiteratureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFindPathwaysByLiteratureQueryParams)
    ], GetFindPathwaysByLiteratureRequest.prototype, "queryParams", void 0);
    return GetFindPathwaysByLiteratureRequest;
}(SpeakeasyBase));
export { GetFindPathwaysByLiteratureRequest };
var GetFindPathwaysByLiteratureResponse = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByLiteratureResponse, _super);
    function GetFindPathwaysByLiteratureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFindPathwaysByLiteratureResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFindPathwaysByLiteratureResponse.prototype, "statusCode", void 0);
    return GetFindPathwaysByLiteratureResponse;
}(SpeakeasyBase));
export { GetFindPathwaysByLiteratureResponse };
