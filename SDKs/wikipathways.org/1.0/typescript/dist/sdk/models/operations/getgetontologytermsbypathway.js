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
export var GetGetOntologyTermsByPathwayFormatEnum;
(function (GetGetOntologyTermsByPathwayFormatEnum) {
    GetGetOntologyTermsByPathwayFormatEnum["Json"] = "json";
    GetGetOntologyTermsByPathwayFormatEnum["Xml"] = "xml";
    GetGetOntologyTermsByPathwayFormatEnum["Html"] = "html";
    GetGetOntologyTermsByPathwayFormatEnum["Dump"] = "dump";
    GetGetOntologyTermsByPathwayFormatEnum["Jpg"] = "jpg";
    GetGetOntologyTermsByPathwayFormatEnum["Pdf"] = "pdf";
})(GetGetOntologyTermsByPathwayFormatEnum || (GetGetOntologyTermsByPathwayFormatEnum = {}));
var GetGetOntologyTermsByPathwayQueryParams = /** @class */ (function (_super) {
    __extends(GetGetOntologyTermsByPathwayQueryParams, _super);
    function GetGetOntologyTermsByPathwayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetOntologyTermsByPathwayQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetOntologyTermsByPathwayQueryParams.prototype, "pwId", void 0);
    return GetGetOntologyTermsByPathwayQueryParams;
}(SpeakeasyBase));
export { GetGetOntologyTermsByPathwayQueryParams };
var GetGetOntologyTermsByPathwayRequest = /** @class */ (function (_super) {
    __extends(GetGetOntologyTermsByPathwayRequest, _super);
    function GetGetOntologyTermsByPathwayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetOntologyTermsByPathwayQueryParams)
    ], GetGetOntologyTermsByPathwayRequest.prototype, "queryParams", void 0);
    return GetGetOntologyTermsByPathwayRequest;
}(SpeakeasyBase));
export { GetGetOntologyTermsByPathwayRequest };
var GetGetOntologyTermsByPathwayResponse = /** @class */ (function (_super) {
    __extends(GetGetOntologyTermsByPathwayResponse, _super);
    function GetGetOntologyTermsByPathwayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetOntologyTermsByPathwayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetOntologyTermsByPathwayResponse.prototype, "statusCode", void 0);
    return GetGetOntologyTermsByPathwayResponse;
}(SpeakeasyBase));
export { GetGetOntologyTermsByPathwayResponse };
