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
export var GetGetPathwaysByOntologyTermFormatEnum;
(function (GetGetPathwaysByOntologyTermFormatEnum) {
    GetGetPathwaysByOntologyTermFormatEnum["Json"] = "json";
    GetGetPathwaysByOntologyTermFormatEnum["Xml"] = "xml";
    GetGetPathwaysByOntologyTermFormatEnum["Html"] = "html";
    GetGetPathwaysByOntologyTermFormatEnum["Dump"] = "dump";
    GetGetPathwaysByOntologyTermFormatEnum["Jpg"] = "jpg";
    GetGetPathwaysByOntologyTermFormatEnum["Pdf"] = "pdf";
})(GetGetPathwaysByOntologyTermFormatEnum || (GetGetPathwaysByOntologyTermFormatEnum = {}));
var GetGetPathwaysByOntologyTermQueryParams = /** @class */ (function (_super) {
    __extends(GetGetPathwaysByOntologyTermQueryParams, _super);
    function GetGetPathwaysByOntologyTermQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetPathwaysByOntologyTermQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=term" }),
        __metadata("design:type", String)
    ], GetGetPathwaysByOntologyTermQueryParams.prototype, "term", void 0);
    return GetGetPathwaysByOntologyTermQueryParams;
}(SpeakeasyBase));
export { GetGetPathwaysByOntologyTermQueryParams };
var GetGetPathwaysByOntologyTermRequest = /** @class */ (function (_super) {
    __extends(GetGetPathwaysByOntologyTermRequest, _super);
    function GetGetPathwaysByOntologyTermRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetPathwaysByOntologyTermQueryParams)
    ], GetGetPathwaysByOntologyTermRequest.prototype, "queryParams", void 0);
    return GetGetPathwaysByOntologyTermRequest;
}(SpeakeasyBase));
export { GetGetPathwaysByOntologyTermRequest };
var GetGetPathwaysByOntologyTermResponse = /** @class */ (function (_super) {
    __extends(GetGetPathwaysByOntologyTermResponse, _super);
    function GetGetPathwaysByOntologyTermResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetPathwaysByOntologyTermResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetPathwaysByOntologyTermResponse.prototype, "statusCode", void 0);
    return GetGetPathwaysByOntologyTermResponse;
}(SpeakeasyBase));
export { GetGetPathwaysByOntologyTermResponse };
