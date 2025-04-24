import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function HezmartBreadcrumb() {
  return (
    <Breadcrumb className="flex gap-4 items-center text-sm mt-5 items-center">
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center space-x-2">
          <span>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/sell">Sell on Hezmart</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/sell/register" className="font-semibold">
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
