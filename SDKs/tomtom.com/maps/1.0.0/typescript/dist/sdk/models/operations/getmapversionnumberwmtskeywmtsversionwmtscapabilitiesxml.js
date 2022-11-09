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
export var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum;
(function (GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum) {
    GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum["One00"] = "1.0.0";
})(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum || (GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum = {}));
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "versionNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=wmtsVersion" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "wmtsVersion", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
}(SpeakeasyBase));
export { GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams };
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest.prototype, "pathParams", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest;
}(SpeakeasyBase));
export { GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest };
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse;
}(SpeakeasyBase));
export { GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse };
