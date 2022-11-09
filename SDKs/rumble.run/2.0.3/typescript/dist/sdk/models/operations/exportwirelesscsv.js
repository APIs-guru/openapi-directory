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
var ExportWirelessCsvQueryParams = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvQueryParams, _super);
    function ExportWirelessCsvQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportWirelessCsvQueryParams.prototype, "search", void 0);
    return ExportWirelessCsvQueryParams;
}(SpeakeasyBase));
export { ExportWirelessCsvQueryParams };
var ExportWirelessCsvSecurity = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvSecurity, _super);
    function ExportWirelessCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportWirelessCsvSecurity.prototype, "bearerAuth", void 0);
    return ExportWirelessCsvSecurity;
}(SpeakeasyBase));
export { ExportWirelessCsvSecurity };
var ExportWirelessCsvRequest = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvRequest, _super);
    function ExportWirelessCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportWirelessCsvQueryParams)
    ], ExportWirelessCsvRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportWirelessCsvSecurity)
    ], ExportWirelessCsvRequest.prototype, "security", void 0);
    return ExportWirelessCsvRequest;
}(SpeakeasyBase));
export { ExportWirelessCsvRequest };
var ExportWirelessCsvResponse = /** @class */ (function (_super) {
    __extends(ExportWirelessCsvResponse, _super);
    function ExportWirelessCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportWirelessCsvResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportWirelessCsvResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ExportWirelessCsvResponse.prototype, "exportWirelessCsv200TextCsvBinaryString", void 0);
    return ExportWirelessCsvResponse;
}(SpeakeasyBase));
export { ExportWirelessCsvResponse };
