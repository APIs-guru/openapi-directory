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
// ErrorObjectSource
/**
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 *
**/
var ErrorObjectSource = /** @class */ (function (_super) {
    __extends(ErrorObjectSource, _super);
    function ErrorObjectSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], ErrorObjectSource.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], ErrorObjectSource.prototype, "pointer", void 0);
    return ErrorObjectSource;
}(SpeakeasyBase));
export { ErrorObjectSource };
// ErrorObject
/**
 * Provides information about an error processing a request.
 *
**/
var ErrorObject = /** @class */ (function (_super) {
    __extends(ErrorObject, _super);
    function ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], ErrorObject.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ErrorObjectSource)
    ], ErrorObject.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ErrorObject.prototype, "title", void 0);
    return ErrorObject;
}(SpeakeasyBase));
export { ErrorObject };
