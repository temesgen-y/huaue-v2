import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import PerformanceOptimizations from "@/components/PerformanceOptimizations";
import { seoConfig, structuredDataConfig } from "@/components/SEO";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import HuayueProducts from "@/pages/HuayueProducts";
import EdierProducts from "@/pages/EdierProducts";
import About from "@/pages/About";
import AgencyPolicy from "@/pages/AgencyPolicy";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/">
            <SEO {...seoConfig.home} />
            <StructuredData type="organization" data={structuredDataConfig.organization} />
            <Home />
          </Route>
          <Route path="/products">
            <SEO {...seoConfig.products} />
            <StructuredData type="product" data={structuredDataConfig.huayueProduct} />
            <Products />
          </Route>
          <Route path="/products/huayue">
            <SEO {...seoConfig.huayueProducts} />
            <StructuredData type="product" data={structuredDataConfig.huayueProduct} />
            <HuayueProducts />
          </Route>
          <Route path="/products/edier">
            <SEO {...seoConfig.edierProducts} />
            <StructuredData type="product" data={structuredDataConfig.edierProduct} />
            <EdierProducts />
          </Route>
          <Route path="/about">
            <SEO {...seoConfig.about} />
            <StructuredData type="organization" data={structuredDataConfig.organization} />
            <About />
          </Route>
          <Route path="/agency-policy">
            <SEO {...seoConfig.agencyPolicy} />
            <AgencyPolicy />
          </Route>
          <Route path="/news">
            <SEO {...seoConfig.news} />
            <News />
          </Route>
          <Route path="/contact">
            <SEO {...seoConfig.contact} />
            <StructuredData type="organization" data={structuredDataConfig.organization} />
            <Contact />
          </Route>
          <Route>
            <SEO 
              title="Page Not Found - Huayue Plastics Industry" 
              description="The page you are looking for could not be found. Please visit our homepage or contact us for assistance."
              noindex={true}
            />
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceOptimizations />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
