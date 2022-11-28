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
var ControllersAdvisoryDetailAttributes = /** @class */ (function (_super) {
    __extends(ControllersAdvisoryDetailAttributes, _super);
    function ControllersAdvisoryDetailAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cves" }),
        __metadata("design:type", Array)
    ], ControllersAdvisoryDetailAttributes.prototype, "cves", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixes" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "fixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_date" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages" }),
        __metadata("design:type", Map)
    ], ControllersAdvisoryDetailAttributes.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_date" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "publicDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=references" }),
        __metadata("design:type", Array)
    ], ControllersAdvisoryDetailAttributes.prototype, "references", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", Number)
    ], ControllersAdvisoryDetailAttributes.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solution" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "solution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synopsis" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "synopsis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ControllersAdvisoryDetailAttributes.prototype, "topic", void 0);
    return ControllersAdvisoryDetailAttributes;
}(SpeakeasyBase));
export { ControllersAdvisoryDetailAttributes };
