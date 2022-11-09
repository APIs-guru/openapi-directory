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
export var DfsSlatesFormatEnum;
(function (DfsSlatesFormatEnum) {
    DfsSlatesFormatEnum["Xml"] = "XML";
    DfsSlatesFormatEnum["Json"] = "JSON";
})(DfsSlatesFormatEnum || (DfsSlatesFormatEnum = {}));
var DfsSlatesPathParams = /** @class */ (function (_super) {
    __extends(DfsSlatesPathParams, _super);
    function DfsSlatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], DfsSlatesPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" }),
        __metadata("design:type", String)
    ], DfsSlatesPathParams.prototype, "tournamentid", void 0);
    return DfsSlatesPathParams;
}(SpeakeasyBase));
export { DfsSlatesPathParams };
var DfsSlatesRequest = /** @class */ (function (_super) {
    __extends(DfsSlatesRequest, _super);
    function DfsSlatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DfsSlatesPathParams)
    ], DfsSlatesRequest.prototype, "pathParams", void 0);
    return DfsSlatesRequest;
}(SpeakeasyBase));
export { DfsSlatesRequest };
var DfsSlatesResponse = /** @class */ (function (_super) {
    __extends(DfsSlatesResponse, _super);
    function DfsSlatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DfsSlatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], DfsSlatesResponse.prototype, "dfsSlates", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DfsSlatesResponse.prototype, "statusCode", void 0);
    return DfsSlatesResponse;
}(SpeakeasyBase));
export { DfsSlatesResponse };
